import { NFTCategory } from '../nft/types'

const env = process.env

const MANAToken = env.REACT_APP_MANA_ADDRESS!
const LANDRegistry = env.REACT_APP_LAND_ADDRESS!
const EstateRegistry = env.REACT_APP_ESTATE_ADDRESS!
const ExclusiveMasksCollection = env.REACT_APP_EXCLUSIVE_MASKS_ADDRESS!
const Halloween2019Collection = env.REACT_APP_HALLOWEEN_2019_ADDRESS!
const Xmas2019Collection = env.REACT_APP_XMAS_2019_ADDRESS!
const DCLRegistrar = env.REACT_APP_DCL_REGISTRAR!
const Marketplace = env.REACT_APP_MARKETPLACE_ADDRESS!
const Bids = env.REACT_APP_BIDS_ADDRESS!

export const contractAddresses = {
  MANAToken,
  LANDRegistry,
  EstateRegistry,
  ExclusiveMasksCollection,
  Halloween2019Collection,
  Xmas2019Collection,
  DCLRegistrar,
  Marketplace,
  Bids
}

export const contractSymbols = {
  [MANAToken]: 'MANA',
  [LANDRegistry]: 'LAND',
  [EstateRegistry]: 'Estates',
  [ExclusiveMasksCollection]: 'Exclusive Masks',
  [Halloween2019Collection]: 'Halloween',
  [Xmas2019Collection]: 'Xmas',
  [DCLRegistrar]: 'Names',
  [Marketplace]: 'Marketplace',
  [Bids]: 'Bids'
} as const

export const contractCategories = {
  [LANDRegistry]: NFTCategory.PARCEL,
  [EstateRegistry]: NFTCategory.ESTATE,
  [ExclusiveMasksCollection]: NFTCategory.WEARABLE,
  [Halloween2019Collection]: NFTCategory.WEARABLE,
  [Xmas2019Collection]: NFTCategory.WEARABLE,
  [DCLRegistrar]: NFTCategory.ENS
} as const

export const contractNames = {
  [MANAToken]: 'MANAToken',
  [LANDRegistry]: 'LANDRegistry',
  [EstateRegistry]: 'EstateRegistry',
  [ExclusiveMasksCollection]: 'ExclusiveMasksCollection',
  [Halloween2019Collection]: 'Halloween2019Collection',
  [Xmas2019Collection]: 'Xmas2019Collection',
  [DCLRegistrar]: 'DCLRegistrar',
  [Marketplace]: 'Marketplace',
  [Bids]: 'ERC721Bid'
}