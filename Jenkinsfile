pipeline {

    agent { label 'app_project_docker' }

    environment {}

    stages{
        stage("Tests"){
            steps{
                sh "npm install"
                sh "./scipt/test"
            }

        }

        stage("SonaQuube"){

        }

        stage("Prod Deployment"){

        }
    }
}