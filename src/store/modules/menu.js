import user from './user'

import iconBucket from '../../assets/icon-bucket.png'
import iconDashboard from '../../assets/icon-dashboard.png'
import iconKey from '../../assets/icon-key.png'
import iconMachine from '../../assets/icon-machine.png'
import iconPartition from '../../assets/icon-partition.png'

const bucket = {
    index: 1,
    name: 'bucket',
    icon: iconBucket
}

const dashboard = {
    index: 2,
    name: 'dashboard',
    icon: iconDashboard
}

const keychain = {
    index: 3,
    name: 'keychain',
    icon: iconKey
}

const machine = {
    index: 4,
    name: 'machine',
    icon: iconMachine
}

const partition = {
    index: 5,
    name: 'partition',
    icon: iconPartition
}
const ONLINE_NORMAL = [bucket, dashboard, keychain]
const ONLINE_ADMIN = [bucket, dashboard, keychain, machine, partition]

const state = {
    menuList: user.state.type === 'admin' || user.state.type === 'super' ? ONLINE_ADMIN : ONLINE_NORMAL
}

export default {
    state
}
