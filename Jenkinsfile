pipeline {
    agent any
    stages {
        stage('Remove previous config docker') {
            steps {
                sh 'docker stop ct-portfolio || true && docker rm ct-portfolio || true'
                sh 'docker rmi $(docker images | grep \'portfolio\') || true'
            }
        }
        stage('Build container') {
            steps {
                sh 'docker build -t portfolio .'
            }
        }
        stage('Run container') {
            steps {
                sh 'docker run -p 4100:4100 -d --name ct-portfolio portfolio'
            }
        }
    }
}
