import time
from datetime import datetime
import sys
import smbus2
import bme280

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


def cel_to_fahrenheit(celsius):
    return (celsius * 9.05 / 5.0) + 32

cred = credentials.Certificate('./piestorm-6bc02-firebase-adminsdk-fbsvc-921e5c403f.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()

address = 0x76

bus = smbus2.SMBus(1)

calibration_params = bme280.load_calibration_params(bus, address)
        
data = bme280.sample(bus, address, calibration_params)
    
tempture_cel = data.temperature
pressure = data.pressure
humidity = data.humidity
    
tempture_far = cel_to_fahrenheit(tempture_cel)

db.collection('sensor-data').add({
    'humidity'  : round(humidity, 2),
    'pressure'  : round(pressure, 2),
    'temp-f'    : round(tempture_far, 2),
    'temp-c'    : round(tempture_cel, 2),
    'time_stamp': datetime.now(),
    'location'  : sys.argv[1],
})

# print("Tempture: {:.2f} C, {:.2f} F".format(tempture_cel, tempture_far))
# print("Pressure: {:.2f} hPa".format(pressure))
# print("Humidity: {:.2f} %".format(humidity))
