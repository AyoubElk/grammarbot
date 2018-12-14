module.exports = {
  'software': {
    'name': 'GrammarBot',
    'version': '4.3-SNAPSHOT',
    'apiVersion': 1,
    'premium': false,
    'premiumHint': "You might be missing errors only the Premium version can find. Upgrade to see what you're missing.",
    'status': ''
  },
  'warnings': {
    'incompleteResults': false
  },
  'language': {
    'name': 'English',
    'code': 'en-US',
    'detectedLanguage': {
      'name': 'English (US)',
      'code': 'en-US'
    }
  },
  'matches': [
    {
      'message': "Statistics suggests that 'there' (as in 'Is there an answer?') might be the correct word here, not 'their' (as in 'It’s not their fault.'). Please check.",
      'shortMessage': '',
      'replacements': [
        {
          'value': 'there'
        }
      ],
      'offset': 27,
      'length': 5,
      'context': {
        'text': "I can't remember how to go their.",
        'offset': 27,
        'length': 5
      },
      'sentence': "I can't remember how to go their.",
      'type': {
        'typeName': 'Other'
      },
      'rule': {
        'id': 'CONFUSION_RULE',
        'description': 'Statistically detect wrong use of words that are easily confused',
        'issueType': 'non-conformance',
        'category': {
          'id': 'TYPOS',
          'name': 'Possible Typo'
        }
      }
    }
  ]
}
