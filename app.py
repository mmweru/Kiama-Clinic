import streamlit as st
import tweepy
import spacy

#Twitter API setup (replace with your keys and tokens, if needed for other functionality)
consumer_key = "P7R8j9RsTzKTADijSQEN3YDMG"
consumer_secret = "5Ido4ip1RFUHfTMciVULEAq2fuocgDRiYmgbpw5auBcofAP2P2"
access_token = "1681115966975930369-4URqO7E556PPCWIIWtCTpQ5MRrfhP3"
access_token_secret = "gMHxD3qIW6mEmMYGiG6HBCDBUiX4U3tuuc1mbSvOzZCzc"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

#NLP setup for identifying relevant keywords and synonyms
nlp = spacy.load("en_core_web_sm")

# Define relevant beauty-related keywords and synonyms
beauty_keywords = {
    "beauty", "skincare", "makeup", "hair", "nails", "cosmetics", "fashion", "style",
    "aesthetic", "appearance", "wellness", "self-care", "grooming", "confidence",
    "cosmetology", "dermatology", "aesthetics", "spa", "glamour", "makeup artist",
    "skin", "moisturizer", "serum", "cleanser", "toner", "exfoliator", "SPF", "mascara",
    "eyeliner", "foundation", "lipstick", "hairstyle", "haircut", "nail art", "perfume",
    "tattoo", "tattoo camouflage", "tattoo removal", "stretch marks", "body positivity",
    "flawless", "radiant", "glowing", "youthful", "healthy", "vibrant", "attractive",
    "beautiful", "confident", "stylish", "trendy", "elegant", "sophisticated",
}

def create_tweet(text):
    # ... (NLP analysis, keyword check, and confirmation)
    if beauty_keywords:
        # ... (confirmation logic)
        st.success("Tweet content validated!")
        st.balloons()  # Display success popup
        st.experimental_rerun()
    else:
        st.error("Please focus on beauty-related topics when crafting your tweet.")

st.header("Kiama Beauty Tweets ✨")

tweet_counter = 0  # Initialize a counter

tweet_text = st.text_area("Enter your beauty-related tweet:", key=f"tweet_input_{tweet_counter}")
create_button = st.button("Create Tweet", key=f"submit_{tweet_counter}")

if create_button:
    create_tweet(tweet_text)
    tweet_counter += 1  # Increment the counter

add_button = st.button("Add Tweet")

if add_button:
    tweet_counter += 1
    tweet_text = st.text_area("Enter your beauty-related tweet:", key=f"tweet_input_{tweet_counter}")
    create_button = st.button("Create Tweet", key=f"submit_{tweet_counter}")

    if create_button:
        create_tweet(tweet_text)
