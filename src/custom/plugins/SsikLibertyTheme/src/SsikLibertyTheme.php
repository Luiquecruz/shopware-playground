<?php declare(strict_types=1);

namespace SsikLibertyTheme;

use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class SsikLibertyTheme extends Plugin implements ThemeInterface
{
    public function getThemeConfigPath(): string
    {
        return 'theme.json';
    }

     /**
     * @throws \Exception
     */
    public function build(ContainerBuilder $container): void
    {
        parent::build($container);

        $loader = new XmlFileLoader($container, new FileLocator(__DIR__ . '/Core/Content/DependencyInjection'));
        $loader->load('services.xml');
        
    }
}