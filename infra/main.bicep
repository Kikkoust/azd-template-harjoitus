param location string = resourceGroup().location
param webAppName string = 'azd-calc-template-kikkoust'
param sku string = 'F1'

resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: 'plan-${webAppName}'
  location: location
  sku: {
    name: sku
    tier: 'Free'
  }
  kind: 'linux'
  properties: {
    reserved: true
  }
}

resource webApp 'Microsoft.Web/sites@2023-01-01' = {
  name: webAppName
  location: location
  kind: 'app,linux'
  tags: {
    'azd-service-name': 'web'
  }
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'php|8.0'
    }
  }
}

