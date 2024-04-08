import React from 'react'

import { RemoveUserUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';

export const ProfileInfoViewModel = () => {

const removeSession = async () => {

await RemoveUserLocalUseCase();

}

return {

removeSession

}

}

export default ProfileInfoViewModel;