import smbus2
import bme280
import time
import matplotlib.pyplot as plt 
from datetime import datetime

address =0x76

bus = smbus.SMBus(1)
calibration_params = bme280.load_calibration_params(bus,address)

#data storage
timestamps = []
temperature_celsius_values = []
humidity_values = []
pressure_values = []

#boolean val for loop
running = True

#setting up graph
plt.ion()
fig, axs = plt.subplots(3,1,sharex = True, figsize = (10,8))
fig.suptitle('Sensor Data')

#subplot labels
axs[0].set_ylabel('Termperature')
axs[1].set_ylabel('Humidity(%)')
axs[2].set_ylabel('Pressure(hPa)')

#infinite run loop
while running:
    try:
        #read sensor
        print('Running')
        data = bme.sample(bus,address,calibration_params)

        #extract data
        temperature_celcius = data.temperature 
        humidity = data.humidity
        pressure = data.pressure
        timestamp = data.timestamp

        #data to lists
        timestamps.append(timestamp)
        temperature_celsius_values.append(temperature_celcius)
        humidity_values.append(humidity)
        pressure_values.append(pressure)

        #plot data
        for i, (ax,values,label) in enumerate(zip(axs, [temperature_celsius_values, humidity_values, pressure_values], ['Temperature (Celsius)', 'Humidity(%)', 'Pressure(hPa)'])):
            ax.clear()
            ax.plot(timestamps, values, label=label)
            ax.legend()
            ax.set_ylabel(label)
        axs[-1].set.xlabel('Time')
        fig.autofmt_xdate(rotation=45)
        plt.pause(1)
        time.sleep(1)
    except KeyboardInterrupt:
        print('Program stopped')
        running = False
    except Exception as e:
        print('An unexpected error occured', str(e))
        running = False
    
#close plot
plt.ioff()
clt.show()
