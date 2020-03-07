from textgenrnn import textgenrnn

textgen=textgenrnn()

# the .data files are just plain text files - i've just given them this 
# extension so i can gitignore them quickly.
textgen.train_from_file('training.data', num_epochs=5)

# save weights
textgen.save("trainout.hdf5")

textgen.generate_to_file('output.data', n=100)

