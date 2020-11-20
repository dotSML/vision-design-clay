import ClayLayout from '@clayui/layout';

const Component = () => {
    const colStyles = {
      backgroundColor: "#E7E7ED",
      border: "1px solid #CDCED9",
      paddingBottom: ".75rem",
      paddingTop: ".75rem"
    };
  
    return (
      <ClayLayout.ContainerFluid view>
        <ClayLayout.Row justify="start">
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
        </ClayLayout.Row>
        <ClayLayout.Row justify="center">
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
        </ClayLayout.Row>
        <ClayLayout.Row justify="end">
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
        </ClayLayout.Row>
        <ClayLayout.Row justify="around">
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
        </ClayLayout.Row>
        <ClayLayout.Row justify="between">
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
          <ClayLayout.Col size={4} style={colStyles}>
            {"One of two columns"}
          </ClayLayout.Col>
        </ClayLayout.Row>
      </ClayLayout.ContainerFluid>
    );
  };
  
  render(<Component />);