class Word:
    # dictionary maps sentiment to succeeding phrases (ngrams)
    def __init__(self, word, sentiment_ngrams_dict):
        self.word = word
        self.sentiment_ngrams_dict = sentiment_ngrams_dict
