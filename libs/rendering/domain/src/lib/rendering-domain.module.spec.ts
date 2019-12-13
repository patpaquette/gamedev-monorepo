import { async, TestBed } from '@angular/core/testing';
import { RenderingDomainModule } from './rendering-domain.module';

describe('RenderingDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RenderingDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RenderingDomainModule).toBeDefined();
  });
});
