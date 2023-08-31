pipeline {
    agent any

    // triggers {
    //     pollSCM '* * * * *'
    // }

    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                script {
                    def testOutput = sh(script: 'npm run int-test', returnStatus: true).trim()
                    echo "Test Output: ${testOutput}"

                    if (testOutput == 0) {
                        echo "All tests are green!"
                    } else {
                        error "Some tests failed!"
                    }
                }
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
            }
        }
    }
}
