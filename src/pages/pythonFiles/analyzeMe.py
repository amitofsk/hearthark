#!/usr/bin/env
#The goal here is to read in an audio file, take the fft, find the peak, and return the frequency.
import matplotlib.pyplot as plt
import numpy as np
from scipy.fft import fft, fftfreq
from scipy.io import wavfile
#import scipy.io.wavfile as wv
#from numpy.fft import fft, ifft
#from scipy.fftpack import fft, ifft
print("hello World")
#Following example at https://pythonnumericalmethods.berkeley.edu/notebooks/chapter24.04-FFT-in-Python.html
# See also https://realpython.com/python-scipy-fft/
# sampling rate
sr = 2000
# sampling interval
ts = 1.0/sr
t = np.arange(0,1,ts)
#Let's generate a simple input
freq = 1.
x = 3*np.sin(2*np.pi*freq*t)

freq = 4
x +=10* np.sin(2*np.pi*freq*t)

freq = 7
x += 0.5* np.sin(2*np.pi*freq*t)

#Next we'll read input from a sound file
samplerate, data=wavfile.read("Front_Center.wav")
x=data
#Take the fft
bigX=fft(x)
N=len(bigX)
freq=N/sr
plt.plot( np.abs(bigX))
#plt.show()

#Find the max freq and return it
peakindex=np.argmax(np.abs(bigX))
print("The max occurs at")
print(peakindex)
