pipeline {

    agent any


    stages{
        stage("Tests"){
            steps{
                sh "npm install"
                sh "./script/test"
            }
        }
        stage("Build image"){
            
            steps{
                sh "cd .."
                sh "sudo docker build -t app_projet ."
            }
        }

        stage("Deploy image"){
            steps{
                sh "sudo docker stop app_projet || echo 'No container launched'"
                sh "sudo docker rm app_projet || echo 'No app_projet image'"
                sh "sudo docker run -d --name app_projet -p 3000:3000 app_projet:latest"
            }
        }
        
        stage("Push image to registry"){
            steps{
                sh "sudo docker tag app_projet:latest 51.178.18.199:443/app_projet"
                sh "sudo docker push 51.178.18.199:443/app_projet"
            }
        }
    }
}
