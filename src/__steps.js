/*                      --------------------------
                             INITIAL SETUP
                               INSTALLATION
                          ---------------------------


*  1. Visit console.firebase.google.com
*  2. crate project (skip google analytics)
 * 3. Register app( create config)
 * 4. install firebase  npm install firebase
 * 5. add config file to your project
*  6. Danger: Do not pusblish or mke firebase config to public pushing those to 
github
                            --------------------
                                INTEGRATION
                              ---------------------

* 7. visit:Docs--> build -> Authentication->Web--> get Started
* 8.export app from the firebase.config.js file: export default app
* 9. Login.jsx: import getAuth from firebase/auth
* 10. create const auth = getAuth (app)
                               ---------------------
                                 PROVIDER SETUP
                                 -----------------------
* 11. import googleAuthProvider and create Provider
* 12. use signInWithPopup and pass auth and provider
*13. activate sign-in method (google, facebook ,github, etc) from build > authentication >sign in method
* 14 [Vite]: change 127.0.0.1 to localhost


*-----------------------------------------------
More Auth Provider
______________________________


1. activate the auth provider (create app, provide redirect url,client id, client secret)


*/



