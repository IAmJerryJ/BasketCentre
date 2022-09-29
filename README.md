How to install this app on your computer

- Create a project folder $ mkdir [give-it-a-name]
- Make sure git has been installed on your computer $ git -v
- Fork the repository to your own github
- Clone this repository $ git clone ssh-url
- (If you have not ssh key, you can do 1. $ssh-keygen 2. pbcopy < ~/.ssh/id_rsa.pub 3. Go to github and save this ssh key you just generated
- Copy the ssh url of the forked project 
- Clone the project on your local computer $ git clone [your-ssh-key]
- Make sure npm has installed
- $ cd server
- $ npm install
- $ cd ../react-app
- $ npm install
- Now both apps should be up and running on your localhost
- Access localhost:3000 to see the react font end
- Nodejs backend is running on port 3030