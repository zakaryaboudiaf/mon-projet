pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                echo 'Installing...'
                bat 'npm install'
            }
        }
        stage('Run App') {
            steps {
                echo 'Running app...'
                bat 'start /B node app.js'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                bat 'npm test'
            }
        }
    }
}
//
