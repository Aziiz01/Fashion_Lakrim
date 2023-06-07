module.exports = {
    // ... other configuration options
  
    module: {
      rules: [
        // ... other rules
  
        // Exclude the problematic module
        {
          test: /\/@sendgrid\/helpers\/classes\/attachment\.js$/,
          exclude: /node_modules/,
          loader: 'null-loader',
        },
      ],
    },
  };
  