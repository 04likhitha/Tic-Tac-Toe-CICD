pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t tictactoe-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f tictactoe || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8081:80 --name tictactoe tictactoe-app'
            }
        }
    }
}

