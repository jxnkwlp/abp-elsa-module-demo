using Demo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Demo;

[DependsOn(
    typeof(DemoEntityFrameworkCoreTestModule)
    )]
public class DemoDomainTestModule : AbpModule
{

}
