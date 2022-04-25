using Volo.Abp.Modularity;

namespace Demo;

[DependsOn(
    typeof(DemoApplicationModule),
    typeof(DemoDomainTestModule)
    )]
public class DemoApplicationTestModule : AbpModule
{

}
