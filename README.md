# IOT-week2_tasks
# TASK1 :
 Voice to text converter using Javascript With the Web Speech API and it's support the arabic language .
 
## Building the User Interface
In the code below , I designed the user interface for speech-to-text application using HTML . 

I also created a button to initiate the speech recognition that will trigger the speech-to-text converter code, and the result is shown in the textarea .

<img width="591" alt="2022-07-06 (2)" src="https://user-images.githubusercontent.com/107887312/177541581-7d062b57-4792-4d61-8fb9-4c6421d4ef19.png">

## Writing the JavaScript Code
The main JavaScript code which is listening to what user speaks and then converting it to text 

In the code below , I invoked the Web Speech Recognition API and initialized an instance stored in the recognition variable.
I also created a content variable that keeps track of text the application has converted and displayed in the textarea from the HTML file.I initializing it to an empty string because we have not converted anything yet.

<img width="319" alt="2022-07-06 (4)" src="https://user-images.githubusercontent.com/107887312/177542866-6529b900-49c7-4e7e-9b2e-97d682ad12bc.png">

 When you will run the code, the browser will ask for permission to use your Microphone, so please click on Allow and then speak anything to see the script in action . 

<img width="767" alt="2022-07-06 (6)" src="https://user-images.githubusercontent.com/107887312/177543115-7fc82b0b-ee19-4833-9e01-c574e3f6a1cb.png">

Now, the application is complete. If you click the Start button, you will see that it will automatically convert whatever you speak into text and fill the transcribed text inside the textbox.

<img width="770" alt="2022-07-06 (8)" src="https://user-images.githubusercontent.com/107887312/177543535-101f7b99-462b-4f22-b037-50be307bcf7a.png">

In a concludes , I built a speech-to-text application with Javascript. I saw how easy it is to create a user interface interactive using HTML,  and JavaScript, also saw how to import our web assets from CDNs, and got the chance to make our application able to convert speech to text successfully.



# TASK2 : 

## Writing an algorithm that run the ESP32 

1-open the Arduino IDE.

2-go to menu bar select "File" and then "Preferences".

3-It will appare a box in the URLs box write URL :  https://dl.espressif.com/dl/package_esp32_index.json 

4-Then "Tools" select "Board" select "Board Manager" in the menu bar. 

5-In the search box write (ESP32).

6-The package will shows select it then install it. 

7-After inslation process is completed you will see "INSTALLED" word. 

8-Close the Board Manager. 

9-from menu bar select "Tools" then "Board" you will see different ESP32 boards select what is appropriate for your ESP32. 

10-Now you can try an example, from menu bar "File" then select "Example". 

11- from menu bar go to "Tools" > Port > select the port in the list and run the code.

