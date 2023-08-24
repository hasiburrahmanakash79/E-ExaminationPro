import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import ReviewAnswerAfterResult from './ReviewAnswerAfterResult'
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 20
  },
  header: {
    marginBottom: 10
  },
  content: {
    marginBottom: 20
  }
})

const ResultPdfConverter = ({ questions, userAnswers }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.header}>
        <Text>Total Question:10, Answered:10, Correct: 08</Text>
      </View>
      <View style={styles.content}>
        <Text>Review Answers:</Text>
        <ReviewAnswerAfterResult
          questions={questions}
          userAnswers={userAnswers}
        />
      </View>
    </Page>
  </Document>
)

export default ResultPdfConverter
