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
                bat 'node app.js'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                bat 'node test.js'
            }
        }
    }
}
//
