pipeline {

    agent any


    stages{
        stage("Tests"){
            steps{
                sh "npm install"
                sh "./script/test"
            }

        }

        stage("Build and Push image to registry"){
            steps{
                sh "docker build -t app_project_docker"
                sh "docker tag image:version 51.178.18.199:5000/app_project_docker"
                sh "docker push 51.178.18.199:5000/app_project_docker"
            }
        }
    }
}