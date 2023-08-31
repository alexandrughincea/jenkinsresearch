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
        echo "Running OPA5 Tests..."
        script {
            def exitCode = sh(script: 'npm run int-test', returnStatus: true)
            echo "Test Exit Code: ${exitCode}"

            if (exitCode == 0) {
                echo "All OPA5 tests passed!"
            } else {
                error "Some OPA5 tests failed!"
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
