from time import sleep, gmtime, strftime
from flask import Flask, request
import datetime
# to read last line of file
from pymongo import MongoClient

# Define IP and port for Flask-server
HOST = '0.0.0.0'
PORT = 8000

rpiMode = bool(True)

print(strftime("%Y-%m-%d %H:%M:%S", gmtime()))

# to mongoDB
client = MongoClient()
client = MongoClient('localhost', 27017)

# define a database at mongoDB
db = client.rpiDB

# define collection inside rpiDB
coffee = db.coffee
rpiIP = "http://0.0.0.0:8000/"

# define debug Messages
message = {}
message["onOff"] = "Maschine faehrt hoch oder runter!"
message["espressoX1"] = "Einfacher Espresso im Bau!"
message["espressoX2"] = "Doppelter Espresso im Bau!"
message["steam"] = "Dampfmaschine am Laden!"
message["clean"] = "Saeuberung gestartet!"
message["coffeeX2"] = "Doppelter Kaffee im Bau"
message["coffeeX1"] = "Einfacher Kaffee im Bau"


if rpiMode:
    from gpiozero import LED
    PORT = 80

    rpiIP = "http://192.168.178.37:80/"

    # Define Espresso outputs as dictionary
    outputs = {}

    # GPIO 10 is currently not used

    # Turn machine on/off: blue wires
    outputs["onOff"] = LED(26)

    # Single espresso: white wires
    outputs["espressoX1"] = LED(19)

    # Prepare steam: yellow wires
    outputs["steam"] = LED(9)

    # Run clean program: gray wires
    outputs["clean"] = LED(11)

    # Double coffee: green wires
    outputs["coffeeX2"] = LED(12)

    # Single coffee: orange wires
    outputs["coffeeX1"] = LED(21)

    # Double espresso: violet wires
    outputs["espressoX2"] = LED(13)

app = Flask(__name__)


@app.route("/", methods=['POST'])
def controlMachine():

    # possible actions = dictionary-keys

    action = request.form['action']
    print("Action: {}".format(action))

    if rpiMode:
        # press button
        outputs[str(action)].on()

        # hold button for 500ms
        sleep(0.2)

        # release button
        outputs[str(action)].off()

    clientIP = request.remote_addr
    print(clientIP)
    name = getClientName(clientIP)

    timestamp = gmtime()
    data = {
        "action": action,
        "time": datetime.datetime(timestamp[0], timestamp[1], timestamp[2], timestamp[3], timestamp[4], timestamp[5]),
        # "time": gmtime(),
        "username": name,
        "userip": clientIP
    }

    # writesDB and returns objectID
    print(data)
    print("\n")
    print(writeDB(data))

    return str(message[str(action)])


app.run(host=HOST, port=PORT)
