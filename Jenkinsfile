pipeline {
    agent any

    triggers {
        pollSCM '* * * * *'
    }

    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                npm install
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                    def testOutput = sh(script: 'npm run int-test', returnStdout: true).trim()
                    echo "Test Output: ${testOutput}"

                    if (testOutput.contains("All tests passed")) {
                        echo "All tests are green!"
                    } else {
                        error "Some tests failed!"
                    }
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
            }
        }
    }
}
