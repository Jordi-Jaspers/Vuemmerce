# Project name: Vuemmerce

## Biography  
**Authors:**  
Jordi Jaspers [[Github](https://github.com/Jordi-Jaspers "Github Page"), [Linkedin](https://www.linkedin.com/in/jordi-jaspers/ "Linkedin Page")] 
  
**Date of initial commit:**  
28/02/2020  

**Description:**  
The project is an omnichannel e-commerce kiosk based on Vue software in a linux environment. It is a combination of electronics, UX and programming. The intention would be that looks are displayed on the screen through which the customer can scroll and discover the associated products. The customer could also scan a product and then view the look. (look = a combination of products that are shown in a photo collage or video clip with a model). Ultimately, it must be possible to order this or display the location in the store.
 
## Documentation  
This project is a part of a bachelorthesis, all the rights remain with the company and university itself.

* External Promotor:  
Anthony Van Zandycke (anthony.vanzandycke@hyperlynx.be)
* Internal Promoter:  
Luc Claesen (luc.claesen@uhasselt.be)

**Copyright © 2020,Hyperlynx, the ZOO, All Rights Reserved**
  
## What We Learned  
 * Basic Vue.js coding
 * JS automatization
 * Batch file scripting
 * Rasberry pi Customization
 * ...
  
## TODO-List:  
-   Building the basic UI design in Vue.js -> done!
-   Change the favicon to the logo of the shop -> done!
-   Add Navbar -> done!
-   Added temporary TODO list with mockdata -> done!
-   Add image cards -> done
-   Request and fetch data via "axios" -> done!
-   Use proxy -> done!
-   Create Custom Vue file for products and looks -> done!
-   Create Layout for Looks -> done!
-   Added Header and footer implementation -> done!
-   Add Switch for picture and video mode -> done!
-   Use dynamic routing -> done! (waiting untill expansion of the Array)
-   Create Look carousel -> done!
-   Improve Layout with supervision -> (Company was closed, no supervision)
-   Add touch capabilities -> (Company was closed, no embedded system)
-   Create layout for product information -> done!
-   Choose Color pallet for the website -> (Company was closed, no supervision)
-   Create batch file to open chromium in KIOSK mode -> not yet
-   Create Custom Bootscreen RBI -> not yet
-   ...

## Customizing the boot logo of the RBI
Remove Rainbow Screen
Open “/boot/config.txt” as root.

````
sudo nano /boot/config.txt
````
Then add below line at the end of the file.

````
disable_splash=1
````

Remove text message under splash image:
Open “/usr/share/plymouth/themes/pix/pix.script” as root.

````
sudo nano /usr/share/plymouth/themes/pix/pix.script
````
Then, remove (or comment out) four lines below:

````
message_sprite = Sprite();
message_sprite.SetPosition(screen_width * 0.1, screen_height * 0.9, 10000);
my_image = Image.Text(text, 1, 1, 1);
message_sprite.SetImage(my_image);
````   

**Note : This is a quick and dirty method I found. It works, but there might be better way.**


Remove Boot Messages
Open “/boot/cmdline.txt” as root.

````
sudo nano /boot/cmdline.txt
````
Then, replace “console=tty1” with “console=tty3”. This redirects boot messages to tty3.

Remove other things
Still in “/boot/cmdline.txt”, add below at the end of the line

splash quiet plymouth.ignore-serial-consoles logo.nologo vt.global_cursor_default=0
Here are brief explanations.

‘splash’ : enables splash image
‘quiet’ : disable boot message texts
‘plymouth.ignore-serial-consoles’ : not sure about this but seems it’s required when use Plymouth.
‘logo.nologo’ : removes Raspberry Pi logo in top left corner.
‘vt.global_cursor_default=0’ : removes blinking cursor.

**Note : The first three should be there by default, but make sure if those exist.**

Replace Splash Image
Now, everything unwanted images and texts are gone. Let’s replace the default splash image (/usr/share/plymouth/themes/pix/splash.png) with your own splash image.
````
sudo cp ~/my_splash.png /usr/share/plymouth/themes/pix/splash.png
````

**Note : As described in above assumption, “my_splash.png” should be your new splash image.**

Verify the costumed boot up screen
Check the boot up screen by simply rebooting.
````
sudo reboot
````

## Troubleshooting: 
**To start a graphical interface of vue:**
In the GUI it is possible to serve, build or install packages. You could alse export the "dist" folder to deploy the website with all the Html and js code you need.

````
vue ui
````  
  
alternativaly, you could run the following commands:
  
````
vue serve //deploy server
or
vue build //build the dist
or
yarn add ... //install dependencies
````

**Proxy**
Because of the security implementations on company server, it doens't allow calls from unrecognized host adresses. Right now we are working on a localhost and the server sees it as an unrecognized adress. To solve this we used a middle man or proxy by creating an "vue.config.js' file and adding the following lines.

````
module.exports = {
    devServer: {
      proxy: 'put server main-adress here'
    }
  }
````

**Object Carousel**
VueSlickCarousel from 'vue-slick-carousel' doesn't seem to work with component objects?
  

## References:  
 * Troubleshooting: <https://stackoverflow.com/>
 * Vue.js tutorial: <https://www.youtube.com/watch?v=Wy9q22isx3U>
 * Vue.js tutorial code: <https://github.com/bradtraversy/vue_crash_todolist/tree/master/src>
 * JSON Mockdata: <https://jsonplaceholder.typicode.com/>
 * E-commerce GUI: <https://www.youtube.com/watch?v=5JCAzuAPLFs&list=PLB4AdipoHpxYPjGo0n2m6tmCLud_iSEbv&index=19>
 * Custom bootscreen: <https://scribles.net/customizing-boot-up-screen-on-raspberry-pi/>
 * Custom Bootscreen V2020: <https://www.thedigitalpictureframe.com/customize-your-raspberry-pi-splash-screen-raspbian-stretch-april-2019-version/#Make_sure_you_use_the_most_recent_set_of_instructions>
 * Bash-script on startup: <https://raspberrypi.stackexchange.com/questions/8734/execute-script-on-start-up>
 * Chromium Kiosk mode: <https://obrienlabs.net/setup-raspberry-pi-kiosk-chromium/>
 * ...