const DetailedOrder = {} => {
    return(
    <Card title={'Order Title'} style={{ margin: 20 }}>
    <Descriptions bordered column = {{lg: 1, nd: 1, sm: 1}}>
      {dishes.map((dish, index) => (
        <React.Fragment key={index}>
          <Descriptions.Item label="Dish Name">{dish.name}</Descriptions.Item>
          <Descriptions.Item label="Price">{dish.price}</Descriptions.Item>
          <Descriptions.Item label="Description">{dish.description}</Descriptions.Item>
          <Divider />
        </React.Fragment>
      ))}
    </Descriptions>
    <Button type="primary" style={{ marginTop: 20 }}>
      Place Order
    </Button>
    <Divider />
    <List
    dataSource={dishes}
    renderItem={(dishItem) => (
      <List.Item>
        <div style={{fontWeight: 'bold'}}>(dishItem.name)(dishItem.quantity)</div>
        <div>$(dishItem.price)</div>
      </List.Item>
    )}
    />
    <Divider />
    <div style={(StyleSheet.totalSumContainer)}>
      <h2>Total:</h2>
      <h2 style={style.totalPrice}>$42.96</h2>
    </div>
    <Divider/>
    <div style= {style.buttonsContainer}>
    <Button block type= "danger" size="large" styles={styles.button}>
      Decline Order
    </Button>
    <Button block type= "primary" size="large" style={style.button}>
      Accept Order
    </Button>
    </div>
    <Button block type= "primary" size="large">
      Food is Done
    </Button>
  </Card>    


const style  = {
    totalsumContainer: {
    flexDirection: 'row',
    display: 'flex',
  },
    totalPrice:{
    marginLeft: 'auto',
    fontWeight:'bold'
  
    },
    buttonsContainer:{
      display: 'flex',
      paddingBottom: 30
    },
    button: {
      marginRight: 20,
      marginLeft: 20
    },
  };

export defualt DetailedOrder;