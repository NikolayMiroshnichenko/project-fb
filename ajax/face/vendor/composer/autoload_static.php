<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit3e2957deef71c4ecd2131fec4dbd3576
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'FacebookAds\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'FacebookAds\\' => 
        array (
            0 => __DIR__ . '/..' . '/facebook/php-business-sdk/src/FacebookAds',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit3e2957deef71c4ecd2131fec4dbd3576::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit3e2957deef71c4ecd2131fec4dbd3576::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
