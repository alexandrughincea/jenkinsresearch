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
            def exitCode = sh(script: 'npm run int-test', returnStatus: true)
            echo "Test Exit Code: ${exitCode}"

            if (exitCode == 0) {
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
