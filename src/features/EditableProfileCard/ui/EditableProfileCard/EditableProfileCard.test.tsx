import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { componentRender } from '@/shared/config/tests/componentRender'
import { IProfile } from '@/entities/Profile';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/ProfileSlice';
import { EditableProfileCard } from './EditableProfileCard'

const mockProfile: IProfile = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  age: 36,
  city: 'San Francisco',
  username: 'userJohn',
  currency: ECurrency.USD,
  country: ECountry.USA,
}

const mockOptions = {
  initialState: {
    profile: {
      readonly: true,
      data: mockProfile,
      form: mockProfile,
    },
    user: {
      authData: {
        username: 'userJohn',
        id: '1'
      }
    }
  },
  asyncReducers: {
    profile: profileReducer
  },
}
describe('features/EditableProfileCard', () => {
  test('Readonly mode should change on click EditBtn', async () => {
    componentRender(<EditableProfileCard id="1" />, mockOptions)

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

    expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
  })

  test('on click CancelBtn new data should return to prev data', async () => {
    componentRender(<EditableProfileCard id="1" />, mockOptions)

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'the best user');
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'the best user')

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('the best user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('John');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Doe');
  })

  test('Should occure error', async () => {
    componentRender(<EditableProfileCard id="1" />, mockOptions)

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SubmitBtn'));

    expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument()
  })

  test('If there are no errors, a PUT request should go to the server.', async () => {
    const mockPutReq = jest.spyOn($api, 'put')

    componentRender(<EditableProfileCard id="1" />, mockOptions)

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('');

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'the best user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SubmitBtn'));

    expect(mockPutReq).toHaveBeenCalled();
  })
})
