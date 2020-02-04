pipeline {

    agent { label 'app_docker' }


    stages{
        stage("Tests"){
            steps{
                sh "sudo apt-get install curl"
                sh "curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -"
                sh "sudo apt-get install nodejs"
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