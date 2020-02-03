pipeline {

    agent { label 'app_project_docker' }

    environment {}

    stages{
        stage("Tests"){
            sh "npm install"
            sh "./scipt/test"
        }

        stage("SonaQube"){

        }

        stage("Prod Deployment"){

        }
    }
}