## Friend Finder
Friend Finder is an application that allows the user to take a survey and be matched with a new best friend based on thier answers! To reach the application, please visit the following link https://boiling-bayou-10154.herokuapp.com/ 

## Application Information
Friend Finder is hosted on heroku and offers the user the chance to the take the survey as many times as they like. The user is directed to home page (screenshot below) where they have the option to take the survey or look at JSON data for the friends that are currently housed within the application. 

If the user decides to take the survey, they will be redirected to the appropriate page to begin. The user is asked to provide a name and URL image that they want to use as thier "profile" picture, this information will be stored in an array for future use by others interested in taking the survey.

There are ten questions currenlty in the survey, the user has the ability to choose, on a scale of 1 to 5, how much they agree or disagree with the statement being asked. The answers for each of these questions is stored until the end of the survey, where they are then taken and compared with other "friends" within the application. These scores are not aggregated for all 10 answers at the end, instead they are compared by difference per question, then the difference is taken and the stored "friend" with the smallest difference becomes the users new best friend.

Once the user has completed the survey, they can choose to go back to the home page, visit the API page that houses information on all other "friends" or take the survey again, where a new set of answers may produce a new best friend!

Enjoy!

Example of home page for Friend Finder

![Home Page](/app/public/Friendfinder.JPG)

## Known Bugs / Issues
Currently there is not validation built into the application, a user is not yet forced to put in a name, image url or answer all the questions in order to submit for answers about thier new best friend, this will be updated in future iterations.
