import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Shaolin Network Token',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Shaolin Network Token), NFTs, and more, on a platform you can trust.',
  image: 'https://Shaolin Network Token.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/Shaolin Network Token-squad')) {
    basePath = '/Shaolin Network Token-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Shaolin Network Token')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Shaolin Network Token')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Shaolin Network Token')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Shaolin Network Token')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Shaolin Network Token')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Shaolin Network Token')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Shaolin Network Token')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Shaolin Network Token')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Shaolin Network Token')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Shaolin Network Token')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Shaolin Network Token')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Shaolin Network Token')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Shaolin Network Token')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Shaolin Network Token')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Shaolin Network Token')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Shaolin Network Token')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Shaolin Network Token')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Shaolin Network Token')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Shaolin Network Token Info & Analytics')}`,
        description: 'View statistics for Shaolin Network Token exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Shaolin Network Token Info & Analytics')}`,
        description: 'View statistics for Shaolin Network Token exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Shaolin Network Token Info & Analytics')}`,
        description: 'View statistics for Shaolin Network Token exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Shaolin Network Token')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Shaolin Network Token')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Shaolin Network Token')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Shaolin Network Token')}`,
      }
    case '/Shaolin Network Token-squad':
      return {
        title: `${t('Shaolin Network Token Squad')} | ${t('Shaolin Network Token')}`,
      }
    default:
      return null
  }
}
