import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Weather Report'},
  {id: 2, suggestion: 'Test Match'},

  {id: 4, suggestion: 'How are rainbows formed'},

  {id: 6, suggestion: 'Latest trends in ML'},
]

const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

export default App
