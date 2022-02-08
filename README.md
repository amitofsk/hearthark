

## Inspiration

Heart disease is a major problem. Worldwide, 16% of deaths are due to heart disease, and it is the leading cause of death [^1]. Both doctors and heart patients use technology in many ways. For example, heart doctors rely on ECG machines, doctors and patients can communicate by telemedicine, and patients can use smart watches to monitor themselves. However, technology is advancing rapidly. Cellphones and laptops have microphones, cameras, and other sensors. We researched innovative, yet practical, ways of monitoring hearts. We found apps that measure pulse by a finger on a cellphone camera [^2], Google Fit's inexpensive arduino based ECG machines [^3], and do-it-yourself stethoscopes. We asked what more can technology do to help solve the problem of heart disease. 

## What it does

We built dashboards for patients and doctors so they could share information. Our webapp is just a design, not fully functional. However, it could be used as a model to think about doctor and patient communication.

## How we built it

Our code is mostly written in Javascript using the React framework. Our app is hosted on a Heroku server [^4]. 

## Challenges we ran into

Team members didn't know each other before we started the project. We all live in different places and different time zones. (One person lives in Iran, one lives in India, one lives in Indiana, United States, and one lives in California, United States.) Sharing ideas and working together was a challenge. We mostly communicated by Discord, and we occasionally used Google Meet.

## What we would do if we had more time

Medical information should be stored securely. We used fictional patient data. However, if we were to work with real data we'd need a secure login and extra steps to protect the patient's information [^5]. We'd like to integrate with hardware. For example, we'd like the patient to be able to record an audio signal of their heartbeat or use a camera to measure their pulse. Also, if a patient did upload an audio recording, we'd like to be able to analyze it to find the their heart rate from the data [^5].

##References and Footnotes

[1] [link](https://www.who.int/news-room/fact-sheets/detail/the-top-10-causes-of-death)

[2] [link](https://play.google.com/store/apps/details?id=si.modula.android.instantheartrate)

[3][link]( https://www.instructables.com/ECG-Display-With-Arduino/)

[4] Not all features shown in the video are available on the live Heroku server. We were using a free trial Heroku account and ran into some memory limitations.

[5] We started to implement these features. On our github server see the file Server/routes/index.js in the hhServer branch. We didn't get them integrated with the rest of the code.
