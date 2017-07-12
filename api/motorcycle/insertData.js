module.exports = (data, Motorcycle) => {
  Motorcycle.collection.insert(data.bmw, (err, docs) => {
    if (err) {
      res.status(500).json({errors: [error]})
    }
    else {
      console.log('Data was inserted with success!');
    }
  })
  Motorcycle.collection.insert(data.dafra, (err, docs) => {
    if (err) {
      res.status(500).json({errors: [error]})
    }
    else {
      console.log('Data was inserted with success!');
    }
  })
  Motorcycle.collection.insert(data.ducati, (err, docs) => {
    if (err) {
      res.status(500).json({errors: [error]})
    }
    else {
      console.log('Data was inserted with success!');
    }
  })
  Motorcycle.collection.insert(data.harley, (err, docs) => {
    if (err) {
      res.status(500).json({errors: [error]})
    }
    else {
      console.log('Data was inserted with success!');
    }
  })
  Motorcycle.collection.insert(data.honda, (err, docs) => {
    if (err) {
      res.status(500).json({errors: [error]})
    }
    else {
      console.log('Data was inserted with success!');
    }
  })
  Motorcycle.collection.insert(data.kawasaki, (err, docs) => {
    if (err) {
      res.status(500).json({errors: [error]})
    }
    else {
      console.log('Data was inserted with success!');
    }
  })
  Motorcycle.collection.insert(data.ktm, (err, docs) => {
    if (err) {
      res.status(500).json({errors: [error]})
    }
    else {
      console.log('Data was inserted with success!');
    }
  })
  Motorcycle.collection.insert(data.mvagusta, (err, docs) => {
    if (err) {
      res.status(500).json({errors: [error]})
    }
    else {
      console.log('Data was inserted with success!');
    }
  })
  Motorcycle.collection.insert(data.suzuki, (err, docs) => {
    if (err) {
      res.status(500).json({errors: [error]})
    }
    else {
      console.log('Data was inserted with success!');
    }
  })
  Motorcycle.collection.insert(data.triumph, (err, docs) => {
    if (err) {
      res.status(500).json({errors: [error]})
    }
    else {
      console.log('Data was inserted with success!');
    }
  })
  Motorcycle.collection.insert(data.yamaha, (err, docs) => {
    if (err) {
      res.status(500).json({errors: [error]})
    }
    else {
      console.log('Data was inserted with success!');
    }
  })
}
