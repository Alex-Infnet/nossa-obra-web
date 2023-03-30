import {render, screen} from '@testing-library/react'
import SignIn from '../../pages/access/SignIn';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

type BrouterProps = {
  children : React.ReactNode
}

let RouteProv = (props : BrouterProps) => <BrowserRouter>{props.children}</BrowserRouter>
let ThemeProv = (props : BrouterProps) => {
  const theme = createTheme({})
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
let Wrapper = (props : BrouterProps) => (
  <RouteProv>
    <ThemeProv>
      {props.children}
    </ThemeProv>
  </RouteProv>
)

test('should render SignIn page', () => {
  // arrange
  render(<Wrapper><SignIn /></Wrapper>);

  // act

  // assert
  expect(screen.getAllByRole('textbox')).toHaveLength(1)
  expect(screen.getAllByTestId('password')).toHaveLength(1)
  expect(screen.getAllByRole('button')).toHaveLength(1)

})

test('should contain the links for remind password and create account', () => {
  // arrange
  render(<Wrapper><SignIn /></Wrapper>);

  // act

  // assert
  expect(screen.getAllByRole('link')).toHaveLength(2)
  var links = screen.getAllByRole('link')
  expect((links[0] as HTMLAnchorElement).href).toContain('signup')
  expect((links[1] as HTMLAnchorElement).href).toContain('forgotpassword')

})

test('should call signin api', () => {
  // arrange
  render(<Wrapper><SignIn /></Wrapper>);

  // act

  // assert
  expect(screen.getAllByRole('link')).toHaveLength(2)
  var links = screen.getAllByRole('link')
  expect((links[0] as HTMLAnchorElement).href).toContain('signup')
  expect((links[1] as HTMLAnchorElement).href).toContain('forgotpassword')

})