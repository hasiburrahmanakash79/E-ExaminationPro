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

const ResultPdfConverter = ({ resultInfo }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View>
        <View style={styles.header}>
          <Text>Total Question: {resultInfo?.length || 5}</Text>
        </View>
        {resultInfo?.map((result, index) => (
          <View key={index}>
            return(
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>
                <span className='pl-2'>{result?.question}</span>
              </Text>
              <Text style={styles.answerText}>
                You Selected: {result?.userAns}
              </Text>
              <Text style={styles.answerText}>
                Correct Answer: {result?.correctAnswer}
              </Text>
              )
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
)

export default ResultPdfConverter
