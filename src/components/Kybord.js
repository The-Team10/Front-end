import { Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView } from 'react-native'

const KeyboardWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView style={{flex:1 ,backgroundColor:'white'}}>
      <ScrollView >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              {children}
          </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardWrapper