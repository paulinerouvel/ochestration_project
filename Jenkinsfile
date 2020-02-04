pipeline {

    agent any


    stages{
        stage("Tests"){
            steps{
                sh "npm install"
                sh "./script/test"
            }

        }

        /*stage("SonaQuube"){

        }

        stage("Prod Deployment"){

        }*/
    }
}