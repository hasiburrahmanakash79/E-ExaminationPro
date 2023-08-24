import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 20
  },
  header: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  questionContainer: {
    marginVertical: 12
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  answerText: {
    marginVertical: 4
  }
})

const ResultPdfConverter = ({ questions, userAnswers }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.header}>
        <Text>Total Question: {questions.length}</Text>
      </View>
      <View>
        <Text>Review Answers:</Text>
        {questions.map((question, index) => {
          const userAnswer = userAnswers.find(
            answer => answer?.questionId === question?.id
          )

          return (
            <View style={styles.questionContainer} key={question?.id}>
              <Text style={styles.questionText}>
                {index + 1}. {question?.text}
              </Text>
              {userAnswer && (
                <Text style={styles.answerText}>
                  You Selected: {userAnswer?.selectedOptionId}
                </Text>
              )}
              <Text style={styles.answerText}>
                Correct Answer: {question?.correctAnswer}
              </Text>
            </View>
          )
        })}
      </View>
    </Page>
  </Document>
)

export default ResultPdfConverter
