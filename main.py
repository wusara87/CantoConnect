#import kivy modules
from xmlrpc.client import SafeTransport
from kivy.app import App
from kivy.lang import Builder
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button

#load the kv file
Builder.load_file('login.kv')

class LoginLayout(BoxLayout):
    pass

class CantoConnect(App):
    def build(self):
        return LoginLayout()
    
    def login(self):
        #make username and password as dictionary
        username = self.root.ids.username_input.text
        password = self.root.ids.password_input.text

        if username == 'user' and password == 'pass':
            print('Login successful.')
        else:
            print('Login failed.')
        

if __name__ == '__main__':
    CantoConnect().run()