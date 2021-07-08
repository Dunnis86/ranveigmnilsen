module.exports = {
      images: {
        domains: ['cdn.sanity.io'],
    },
      env: {
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        MAIL_ADDRESS: process.env.MAIL_ADDRESS
      }
  };