pipeline {

    agent { label 'app_docker' }


    stages{
        stage("Tests"){
            steps{
                sh "npm install"
                sh "./scipt/test"
            }

        }

        /*stage("SonaQuube"){

        }

        stage("Prod Deployment"){

        }*/
    }
}